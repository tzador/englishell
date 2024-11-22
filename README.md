# englishell

A command-line tool that translates English instructions into shell commands using OpenAI's GPT-3.5, making terminal operations more intuitive and accessible.

## Features

- Translates natural language to shell commands
- Works on macOS and Linux
- Provides detailed explanations for each command
- Requires confirmation before execution
- Available as both `englishell` and `e` commands for convenience

## Installation

```bash
npm install -g englishell
```

## Prerequisites

You need to have an OpenAI API key set in your environment variables:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Usage

Simply type your instruction in plain English after the command:

```bash
englishell [your instruction]
# or use the short form
e [your instruction]
```

### Examples

1. **Finding large files**

```bash
$ englishell find all files larger than 100MB in my home directory

$ find ~/ -type f -size +100M

This command searches your home directory (~/) for files (-type f) that are larger
than 100 megabytes (-size +100M). The results will show the full path to each file
that matches these criteria.
```

2. **Process management**

```bash
$ englishell show me all running node processes

$ ps aux | grep node

This command lists all running processes (ps aux) and filters the results to show
only those containing "node" in their description. The output will show the process
ID, CPU usage, memory usage, and other details for each Node.js process.
```

3. **System information**

```bash
$ englishell show system memory usage

$ free -h

This command displays the system's memory usage in a human-readable format (-h).
It shows total memory, used memory, free memory, shared memory, and available memory,
as well as swap usage statistics.
```

## How It Works

1. Your English instruction is sent to OpenAI's GPT-3.5 model
2. The AI generates an appropriate shell command and explanation
3. The command and explanation are displayed for your review
4. You can press Enter to execute the command or input a follow-up instruction
5. The command is executed in your default shell

## Supported Platforms

- macOS
- Linux

## Security

- All commands are shown before execution
- Requires explicit confirmation (Enter key) before running any command
- You can review the explanation and command before execution

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

