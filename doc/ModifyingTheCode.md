# Modifying the code

## Background information about the code

### Structure

* The app uses [AMD](http://dojotoolkit.org/blog/learn-more-about-amd) modules for maximum compatibility with the ArcGIS API for
JavaScript and with the Dojo Toolkit.
* Virtually all of the JavaScript is stored in files rather than in the launching HTML; this is done to maximize browser caching
and thus speed.
* jsonlineStart.js contains the code to launch the app.
* jsonlineBuildUI.js contains two classes--LGUIBuilder and LGArcGISAccess--for building the user interface.
* jsonlineApp.js contains (directly or through references) the classes that LGUIBuilder uses in the user interface.

### Documentation

* All JavaScript is documented using the [JSDoc](https://github.com/jsdoc3/jsdoc) tags so that code documentation may be
automatically generated.

### Testing

* All JavaScript is run through a JavaScript validator such as [JSLint](http://www.jslint.com/) as a rough check for errors.
(If you use JSLint, a JavaScript formatter such as [JSBeautifier](http://jsbeautifier.org/) helps to format your JavaScript
because JSLint also contains formatting rules that must be met in order to see any code errors.)
* We used Dojo's [D.O.H. (Dojo Objective Harness)](http://dojotoolkit.org/reference-guide/1.8/util/doh.html) for testing during
the initial development of the JavaScript classes. These tests are out-of-date, but will be brought back for helping with custom
development.

### Compression

* The app is set up so that it can run using either uncompressed or compressed JavaScript, and so that the compressed version
may be generated by automatic tools from the uncompressed version. The uncompressed version is used for the app's download; the
compressed version is used for the ArcGIS.com-hosted app site.
* The desire to use automatic generation of compression is the reason that the first series of the app (s1/apps1/js1) has most
of its classes in the single file lgonlineApp.js. We've since developed the ability to compress multiple files into a single
file, so the second series (s2/apps2/js2) organizes the classes by functional areas. In both series, lgonlineStart.js and
lgonlineBuildUI.js are kept separate to maximize parallel access to the server during app startup.