# Cricket Player Selection App

Live link: https://dream-cricketer-squad.netlify.app/

## Description

Welcome to the **Cricket Player Selection App**! This React-based application allows users to manage a fantasy cricket team by selecting players within a given coin budget. The app is designed to match the Figma layout provided, offering a seamless and interactive user experience. Users can select players, view player details, manage their selected players, and perform additional actions like adding more players or removing them from their selection.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React-Toastify**: For better user notifications and alerts.
- **JSON**: For storing player data.
- **GitHub**: For version control and hosting the project repository.

## Key Features

1. **Navbar with User's Coin Display**: The navbar displays the user's available coins, starting at 0. Users can increase their coins by clicking the "Add Coins" button.
2. **Player Selection**: Users can browse through a list of cricket players (displayed in a card layout). On clicking "Choose Player", the app checks if the user has enough coins to select the player. If they do, the player is added to the selected players' list.

3. **Selected Players Management**: The user can view selected players in a single-column layout. Players can be removed from the selected list, and the app keeps track of the number of players selected (maximum 6 players). Alerts and notifications are displayed using React-Toastify for a better user experience.

## Setup Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/TRSiddique/cricket-player-selection-app.git
   ```
