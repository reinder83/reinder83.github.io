# Satisfactory Planner

[Open the planner](https://reinder83.github.io/satisfactory-planner/)

Create a named save, choose your game settings and goals, and track factory construction, storage and phase progress. The calculator runs in your browser.

Your saves remain in browser storage on this device. Export backups regularly; clearing browser data removes them. Full-save exports can be transferred between the public site and the Docker edition. There is no automatic device synchronization.

This repository contains the generated public website and its GitHub Pages deployment workflow. Updates are published automatically after the source project passes its checks.

For self-hosting, use the Docker image ghcr.io/reinder83/satisfactory-planner:latest, publish port 8080 and mount persistent storage at /data.
