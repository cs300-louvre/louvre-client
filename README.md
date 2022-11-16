# Louvre Front End
This repisitory is dedicated for Louvre's front-end.

## How to run
1) Clone this repository.
2) Open the terminal and cd into the cloned repository on your machine.
3) Type `npm install` or `npx expo install` into the terminal and press Enter to safely install all the dependencies with minimal conflicts.
5) If your machine have not installed EAS CLI globally yet, please install it by typing `npm install -g eas-cli` into the terminal and hit Enter.
6) Run `eas build --profile development --platform android` to build the project using EAS, this step will allow Expo projects to use native components on android.
7) After the build is completed, you have to plug in your android device or turn on the android device emulator (newest android API version preferably) on your machine.
8) Install the build on your android device/emulator by entering the build link or scanning the QR code from the previous step.
9) After the installation, type `npx expo start --dev-client` into the terminal and press Enter to run the code.

Note: 
- After installing a new dependencies, high chances are you'll be required to build the project again using `eas build --profile development --platform android`. Please repeat step 6) to step 9).
- When install new dependencies, please use the command `npx expo install <dependency_name>` instead of `npm install <dependency_name> to minimize conflicts.
- Uninstall unused dependencies
