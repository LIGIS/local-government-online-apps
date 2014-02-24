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
            search: "須_Find_鷗",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "現在の位置",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "補正の送信",  // Command button to submit a correction to the app's host
            collect: "須_Filter/Edit_鷗",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            filter: "マップ レイヤのフィルタ処理",  // Explains purpose of type-in box affiliated with template picker
            basemap: "ベースマップの切り替え",  // Command button to open a dialog box for switching basemaps
            share: "共有",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "電子メールで共有",  // Command button to share the current map extents via email
            shareViaFacebook: "Facebook で共有",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Twitter で共有",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "マップの印刷",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "印刷されたマップの表示",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "横向きページ",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "縦向きページ",  // Command button in the print map dialog box to select the portrait page orientation
            help: "ヘルプ"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "電子メール",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "タイトル",  // Shown as title hint in print specification box if a title hint is not configured
            author: "作成者"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "須_Find:_鷗",  // Appears before a search text field in dialog box for searching for a feature
            markup: "描画",  // Appears before a set of tools for drawing on the map
            mapLayers: "マップ レイヤ:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "検索レイヤ フィールド:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "このサイトには、現在の位置を取得する権限がありません。",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "ブラウザが現在の位置を取得できませんでした",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "ブラウザが現在の位置を適切な時間内に取得できませんでした",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "須_This find layer was not found in the map_鷗",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchFieldMissing: "須_This field was not found in the map find layer_鷗",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "須_None of these fields was found in the map find layer_鷗",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "このフィールドはマップ レイヤ内に存在しません",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "コンテンツが送信されました。",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "アプリケーションの構成にアクセスできません",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "アプリケーションが開始できません"  // Appears for any failure to build the user interface
        }
    })
);
