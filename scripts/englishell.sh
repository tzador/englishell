#!/bin/bash

GREY='\033[1;30m'
NC='\033[0m' # No Color

loading() {
  local pid=$1
  local delay=0.1
  local count=0
  while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
    printf "."
    sleep $delay
    ((count++))
  done

  printf "\r%0.s" $(seq 1 $((count + 6)))
  printf "\n"
}

if [ $# -lt 1 ]; then
  echo "Please provide human readable instructions for the shell command you want to generate." >&2
  exit 1
fi

englishell-js -c $* "(The resulting shell command should be runnable on" `uname` "operating system)"> ~/.englishell.sh &

printf "$GREY"
printf "Translating to shell command "
loading $!
printf "$NC"

COMMAND=$(cat ~/.englishell.sh)
rm ~/.englishell.sh

printf "\n"
echo "$COMMAND"

printf "\n"
printf "$GREY"
printf "# [Enter]       - to execute the above command\n"
printf "# [Ctrl+C]      - to abort\n"
printf "# \"?\" or \"help\" - to show explanation\n"
printf ">>> "
printf "$NC"

read -p "" user_input
printf "\n"

if [[ -z "$user_input" ]]; then
  eval "$COMMAND"
else
  COMMAND=$COMMAND englishell-js -e $* > ~/.englishell.txt &

  printf "$GREY"
  printf "Explaining shell command "
  loading $!
  printf "$NC"

  EXPLANATION=$(cat ~/.englishell.txt)
  rm ~/.englishell.txt

  printf "\n"
  echo "$EXPLANATION"

  printf "\n"
  printf "$GREY"
  printf "# [Enter]       - to execute the above command\n"
  printf "# [Ctrl+C]      - to abort\n"
  printf ">>> "
  printf "$NC"

  read -p "" user_input2
  printf "\n"
  eval "$COMMAND"
fi
