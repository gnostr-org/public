.PHONY:view
run:view
view:
	pushd view && make install && make run && popd
view-install:
	pushd view && make install && popd
view-run:
	pushd view && make run && popd
