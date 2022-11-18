import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/home/Home";
import "./styles/mixins/global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Recruiting from "./components/recruiting";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <RouteWrapper
            exact={true}
            path="/"
            component={Home}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/recruiting"
            component={Recruiting}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/impressum"
            component={Impressum}
            layout={DefaultLayout}
          />
          <RouteWrapper
            exact={true}
            path="/datenschutz"
            component={Datenschutz}
            layout={DefaultLayout}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

const DefaultLayout = ({ children, match }) => <>{children}</>;
