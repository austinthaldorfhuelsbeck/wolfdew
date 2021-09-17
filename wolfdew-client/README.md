# Wolfdew - Client

## Navbar

The Navbar displays the logo on the left, which links back to the dashboard. Along the right are two dropdowns: Help & Support, and the provider's name.

- Help & Support: Help Center (documentation linkthrough), Email Support (support form lightbox)

## Collection Display

#### /collections/:collection_id

The collection's cover image is the background image. The provider's logo in a circle sits in the top-left, along with the provider's name and a "Learn More" button (opens in lightbox with website and socials).

The couple's name is displayed in a large header in the top-center, followed by the subtitle: Wedding Collection.

In the top-right are the controls: pause music (set to autoplay), and a hamburger menu bringing up a dropdown to download or share the collection.

Along the bottom, the edits are displayed in square cards. The card consists of the edit's cover image along the top, with the text along the bottom. The background color and text color are affected by the settings. Under the edit's name is a play button and the description "Play Film".

Hovering over an edit makes it increase in size, and clicking brings up the edit fullscreen.

## Studio: Dashboard

#### /studio/dashboard

The Provider Dashboard holds the primary functionality of the app. It displays collections in a card format. It also provides the ability to create a new collection, as well as to search collections.

### Cards

Cards on the dashboard show a square preview of the cover image, the couple's name, and a button providing the ability to delete the card.

## Studio: Collection

#### /studio/collections/:collection_id

A sidebar provides a back button (to dashboard), then navigation between the four main subcomponents: Edit, Design, Settings, Share. The route defaults to "/edit".

### Edit

#### /studio/collections/:collection_id/edit

A header bar displays:

- The couple's name, along with a button to edit settings (links through to "/settings")
- A thumbnail of the cover image, along with a button to remove or replace it (lightbox)
- A small media player with the background music, along with a button to remove or replace it (lightbox)

A bar along the left side displays the collection's edits. At the top is a form accepting one input (name of the edit) and a button to add it to the list.

When an edit is added to the list, it is displayed as a selectable card below the input form. The card displays a thumbnail of the cover image (click to edit) or a button to upload one, the name of the edit which can be clicked to be edited, and a delete button.

When an edit is selected, it is displayed to the right. The first edit in the list is selected by default. In the display box, along the top is the name of the edit and an inline delete button. Below is the embedded video.

### Design

#### /studio/collections/:collection_id/design

A bar along the left side displays a basic form to design the display.

- Save Changes: a button to update the preview is at the top.
- Fonts: Primary and Secondary. Dropdown menus.
- Colors: Primary, Menu Font, Menu Background.

The preview section displays a mockup of the finished site. At the top is a button to View in New Tab. This simply uses the same component in the mockup and links to "/studio/collections/:collection_id".

### Settings

#### /studio/collections/:collection_id/settings

This page is displayed in one container. Along the top is the title: Collection Settings and a button: Save Changes.

Under a horizontal rule is two columns. The left column displays options for privacy:

- Public: Anyone with the link can access the collection
- Password-Protected: Set a custom password to access the collection

Under privacy is Custom Link. This is a simple form that allows the collection's id to be updated (defaults to 8-character string). Under the form is a readout of the URL with a button to copy it: "wolfdew.com/collections/:collection_id"

The right column displays delivery options:

- Title: A form to edit the title of the collection
- Menu Options: Two radio buttons: Download and Share

### Share

#### /studio/collections/:collection_id/share

A bar along the left side displays three tabs for navigation: Email, Share Link, Embed on Website.

Email: Two columns. The left colum header: "Deliver Via Email" and an inline Send button. Form underneath for editing Recipient's Name, Recipient's Email Address, and Subject Line. Underneath the form is a preview of the email.

Right column header: "Email History". Under is a list of sent email components: Recipient's Name, Sent date/time, Recipient's Email Address.

Share Link: Simply displays the custom URL and a button to copy.

Embed on Website: Simply displays the embed code and a button to copy.