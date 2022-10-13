# React-router(v5) practice

1. Use <Route path=""> to set path for specific component
2. Don't forget to use <BrowserRouter> to warp <App>, so that all components can be organized by <Route>
3. Use ":" in path can create params, which allow path & component showing dynamicly.
4. In React-router world, once "root" of path meets, react-router will show corresponding component, it not has to be exact path.
5. Use <Switch> to wrap a bunch of <Route> can make sure that only one <Route> can be shown in one time
6. Use "exact" in <Route> to limit the <Route> that only when url meets exact path can show component
7. <Redirect to=""> helps to redirect user to designated url
8. We can do nested <Route> (<Route> inside a <Route>), but must remember the nested <Router> must have same root path as its outter <Router>, otherwise nested <Router> won't able to be shown.
