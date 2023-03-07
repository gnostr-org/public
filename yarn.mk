install:## 	$(PACKAGE_MANAGER) install
## install:	We use yarn by default
## Try:
##     PACKAGE_MANAGER=npm MAN_COMMAND=install make report
##     PACKAGE_MANAGER=npm MAN_COMMAND=install make install
	@$(PACKAGE_MANAGER) install
run-build:## 	yarn run build
	@$(PACKAGE_MANAGER) run build
run-dev:## 	yarn run dev
	@$(PACKAGE_MANAGER) run dev
run-lint:## 	yarn run lint
	@$(PACKAGE_MANAGER) run lint
run-lint-fix:## 	yarn run lint:fix 
	@$(PACKAGE_MANAGER) run lint:fix
run-postinstall:## 	yarn run postinstall
	@$(PACKAGE_MANAGER) run postinstall
run-preinstall:## 	yarn run preinstall
	@$(PACKAGE_MANAGER) run preinstall
# vim: set noexpandtab:
# vim: set setfiletype make
