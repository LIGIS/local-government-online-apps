﻿/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
({
        tooltips: {
            search: "Sök",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Aktuell plats",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Skicka in rättelse",  // Command button to submit a correction to the app's host
            collect: "Lägg till innehåll i kartan",  // Command button to open a template picker to add features to the map
            filter: "Filtrera kartlager",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Byt baskarta",  // Command button to open a dialog box for switching basemaps
            share: "Dela",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Dela via e-post",  // Command button to share the current map extents via email
            shareViaFacebook: "Dela via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Dela via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Skriv ut karta",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Visa kartutskriften",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Liggande sidorientering",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Stående sidorientering",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Hjälp"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-post",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "Å_title_ö",  // Shown as title hint in print specification box if a title hint is not configured
            author: "Å_author_ö"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Sök:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Rita",  // Appears before a set of tools for drawing on the map
            mapLayers: "Kartlager:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Sök i lagerfälten:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Den här webbplatsen har inte behörighet att hämta den aktuella platsen",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Webbläsaren kunde inte hämta den aktuella platsen",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Webbläsaren kunde inte hämta den aktuella platsen inom rimlig tid",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Det här söklagret finns inte i kartan",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Det här fältet finns inte i kartans söklager",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "Å_None of these fields was found in the map search layer_ö"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
