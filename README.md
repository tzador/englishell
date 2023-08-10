# englishell

Execute shell commands by providing human readable (free text) instructions, in plain english.

Powered by ChatGPT.

**Warning**: Review the suggested commands before executing them.

## Try it out

```shell
$ npx englishell print hello world
# Suggests:
echo "hello world"
```

```shell
$ npx englishell print the size in megabytes of the current directory
# Suggests:
du -sh .
```

## Install

Install globally using npm:

```shell
$ npm i -g englishell
```

Now you can use it using global shell command `englishell`:

```shell
$ englishell show current time, without date
# Suggests:
date +"%T"
```

```shell
$ englishell what year is it
# Suggests:
date +%Y
```


## More Examples

```shell
$ englishell kill the process that listens to port 8080
# Suggests:
lsof -i :8080 | awk '{print $2}' | tail -n 1 | xargs kill -9
```

```shell
$ englishell generate a loud sound
# Suggests:
afplay /System/Library/Sounds/Basso.aiff
```

```shell
$ englishell generate a beep sound
# Suggests:
echo -e "\a"
```

```shell
$ englishell print current git branch
# Suggests:
git branch --show-current
```

```shell
$ englishell show the sizes of all folders in parent of the current directory
# Suggests:
du -sh ../*
```

```shell
$ englishell how long the system has been running
# Suggests:
uptime
```

```shell
$ englishell generate strong password
# Suggests:
openssl rand -base64 14
```
