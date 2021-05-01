import React, {Suspense} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import DisplayWebinar from './containers/DisplayWebinar/DisplayWebinar';

const Webinar = React.lazy(
    () => import('./components/WebinarLink/WebinarLink')
);

const BookWebinar = React.lazy(
    () => import('./components/Booking/Booking')
)

const Bookings = React.lazy(
    () => import('./containers/Bookings/Bookings')
)

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={DisplayWebinar}/>
                    <Route
                        path="/webinar/premium"
                        render={() => <Suspense fallback={(<div>Loading...</div>)}><Webinar type="premium"/>
                        </Suspense>}
                    />
                    <Route
                        path="/webinar/free"
                        render={() => <Suspense fallback={(<div>Loading...</div>)}><Webinar type="free"/>
                        </Suspense>}
                    />
                    <Route
                        path="/webinar/book:webId"
                        render={() => <Suspense fallback={(<div>Loading...</div>)}><BookWebinar />
                        </Suspense>}
                    />
                    <Route
                        path="/bookings"
                        render={() => <Suspense fallback={(<div>Loading...</div>)}><Bookings />
                        </Suspense>}
                    />
                </Switch>
            </Layout>
        </div>
    );
}


export default App;
