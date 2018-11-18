# react-native-scaffold
A scffolded project for creating react-native apps

# Build
```npm i```

## IOS react-native-config

* Go to your project -> Build Settings -> All
* Search for "preprocess"
* Set Preprocess Info.plist File to Yes
* Set Info.plist Preprocessor Prefix File to ${BUILD_DIR}/GeneratedInfoPlistDotEnv.h
* Set Info.plist Other Preprocessor Flags to -traditional
* If you don't see those settings, verify that "All" is selected at the top (instead of "Basic")