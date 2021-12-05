## Makefile directory ##
ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

## Set 'bash' as default shell
SHELL := $(shell which bash)

## Set 'help' target as the default goal
.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@egrep '^[a-zA-Z0-9_\/-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort -d | awk 'BEGIN {FS = ":.*?## "; printf "Usage: make \033[0;34mTARGET\033[0m \033[0;35m[ARGUMENTS]\033[0m\n\n"; printf "Targets:\n"}; {printf "  \033[33m%-25s\033[0m \033[0;32m%s\033[0m\n", $$1, $$2}'

.PHONY: challenge-01
challenge-01: ## Runs challenge-01
	@node ./challenge-01/index.js

.PHONY: challenge-02
challenge-02: ## Runs challenge-02
	@node ./challenge-02/index.js

.PHONY: challenge-03
challenge-03: ## Runs challenge-03
	@node ./challenge-03/index.js

.PHONY: challenge-04
challenge-04: ## Runs challenge-04
	@node ./challenge-04/index.js

.PHONY: challenge-05
challenge-05: ## Runs challenge-05
	@node ./challenge-05/index.js
