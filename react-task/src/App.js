import React, {Suspense} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import DisplayWebinar from './containers/DisplayWebinar/DisplayWebinar';
import Editor from './containers/Editor/Editor';

const Webinar = React.lazy(
    () => import('./components/WebinarLink/WebinarLink')
);

const BookWebinar = React.lazy(
    () => import('./components/Booking/Booking')
)

const Bookings = React.lazy(
    () => import('./containers/Bookings/Bookings')
)

const Authentication = React.lazy(() => import('./containers/Auth/Auth'));

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
                    <Route
                        path="/login"
                        render={() => <Suspense fallback={(<div>Loading...</div>)}><Authentication />
                        </Suspense>}
                    />
                    <Route path='/editor' component={Editor} />
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        </div>
    );
}


export default App;
