import React from 'react'
import { Route, Switch } from "react-router-dom";
import AllComics from "../components/General_Comics/All_Comics";
import AllCharacters from "../components/Main_Section/All_Characters";
import ComicInfo from "../components/Specific_Comic/Comic_Info";

export default function Routes() {
    return (
        <div>
            <Switch>

                <Route path="/comic_info">
                    <ComicInfo />
                </Route>

                <Route path="/more">
                    <AllComics />
                </Route>

                <Route path="/">
                    <AllCharacters />
                </Route>

            </Switch>
        </div>
    )
}
