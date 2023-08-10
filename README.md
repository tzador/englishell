# englishell

Execute shell commands by providing english instructions, powered by ChatGPT.

**Warning**: Review the suggested commands before executing them.

## Examples

```shell
$ e2s kill the process that listens to port 8080
lsof -i :8080 | awk '{print $2}' | tail -n 1 | xargs kill -9
# Hit Enter to execute, Ctrl-C to cancel.
```

```shell
$ e2s print current git branch
git branch --show-current
# Hit Enter to execute, Ctrl-C to cancel.
main
```

```shell
$ englishell show the sizes of all folders in parent of the current directory
du -sh ../*
# Hit Enter to execute, Ctrl-C to cancel.
 29M    ../folder-1
9.7M    ../folder-2
221M    ../folder-3
```

```shell
$ englishell how long the system has been running
uptime
# Hit Enter to execute, Ctrl-C to cancel.
 7:32  up 10 days, 13:45, 1 user, load averages: 1.93 1.70 1.63
```

```shell
$ englishell generate strong password
openssl rand -base64 14
# Hit Enter to execute, Ctrl-C to cancel.
1vsR8gVLuQtKyndzqSM=
```

```shell
$ englishell print all the colors that are available on terminal, one per line, in color that they define
tput -T xterm-256color colors | awk '{for(i=0;i<$1;i++) {printf("\033[38;5;%dmcolor%d\n", i, i);}}'
# Hit Enter to execute, Ctrl-C to cancel.
color0
color1
color2
color3
color4
color5
```

## Prerequisites

- Node > 16 must be installed, with npm.
- You must have an [OpenAI API Key](https://platform.openai.com/account/api-keys)

## First of all, define `OPENAI_API_KEY` environment variable

```shell
export OPENAI_API_KEY="<your_api_key_goes_here>"
```

Or better, put it in your `.bash_profile` or `.zshrc` file,
to have it available in all terminals (restart or create a new terminal after that).

## Try it out

```shell
$ npx englishell print hello world
echo "hello world"
# Hit Enter to execute, Ctrl-C to cancel.
hello world
```

```shell
$ npx englishell print the size in megabytes of the current directory
du -sh .
# Hit Enter to execute, Ctrl-C to cancel.
1.8M   .
```

## Install

Install globally using npm:

```shell
$ npm i -g englishell
```

(Dont forget to define OPENAI_API_KEY env variable).

Now you can use it using global alias:

```shell
$ englishell show current time, without date
date +"%T"
# Hit Enter to execute, Ctrl-C to cancel.
07:14:53

```

Or using shorter alias:

```shell
$ e2s what year is it
date +%Y
# Hit Enter to execute, Ctrl-C to cancel.
2023
```
