# images

Tags: git, kv47.in
URL: https://dev.to/kodaman2/better-commit-messages-3dnm
author: Kailash Vetal
created: Feb 28, 2020 2:30 PM
date: 2019-04-31
excerpt: Better Commit Messages
hero: https://images.unsplash.com/photo-1501504905252-473c47e087f8
title: Better Commit Messages - DEV Community 
updated: Feb 28, 2020 2:46 PM

## Better Commit Messages

Going through my TL saw the below tweet, I felt attacked a bit. As a one man army on most of my projects, I always do typical one liners, init, update, readme, fix-01, and so on. In this article I will show you how to configure git to launch your template on vscode for better commit messages.

> Most commit messages are next to useless because they focus on WHAT was done instead of WHY.This is exactly the wrong thing to focus on. You can always reconstruct what changes a commit contains, but it's near impossible to unearth the reason it was done.(thread)

## The Template

This is the template that I currently use, you can change whatever you want to your liking. [Here's](https://github.com/dmroeder/pylogix/pull/71) an example of me using it. In the beginning it does make you think what to write, but after a few commits you'll get the hang of it.

    # Commit Title (50 chars)
    
    # Why? Issue, enhancement, etc.
    
    # How does it address the why?
    
    # Tickets, Links, etc...

## Save the template in your home directory

I named my template `.git_commit_msg.txt` but you can name it whatever you want. If you don't have environment HOME paths, then do an absolute path.

### Linux, Mac

`${HOME}/.git_commit_msg.txt`

### Windows

`%HOME%/.git_commit_msg.txt`

## Activate template on git

### Linux, Mac

    git config --global commit.template ${HOME}/.git_commit_msg.txt

### Windows

    git config --global commit.template %HOME%/.git_commit_msg.txt

## Configuring your editor

Check your default text editor:

    git config core.editor

I configured mine with vscode on git configuration :

    git config --global core.editor "code -w"

> code needs to be on path, if you type code in terminal/prompt and the editor doesn't open, then open vscode and do CMD/CTRL+SHIFT+P, and type shell command, you should see install and uninstall options. Windows adds code by default during installation. code can be replaced with your preferred text editor, vim, emacs, sublime, if you are having issues with your text editor, SO is your friend.

## How it works?

Once you do a commit, the template will open up on vscode, you can uncomment the template lines, add new ones, whatever. Save message, and close file. At that point your commit will be complete. If you close the template without adding anything, commit will be cancelled. When you do the PR, that whole detailed commit message will be in your PR, ready for the maintainer to review.

    git commit

> You can still use -m argument for those pesky one liners.

## What do you prefer?

- Do you enjoy one liners, and then do detailed PRs.
- Do you use commit templates?
- Does your team/company enforce a template?
- Any other methods?