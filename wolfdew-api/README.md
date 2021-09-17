# Wolfdew - API

At its core, the Wolfdew API allows the organization of two intersecting tables, and a join table to connect them. The first table represents collections, and the second represents the edits within a collection. Together, they make up the display of the final product for the client. Making changes to the values within these tables comprises the functionality of the client dashboard.

## Tables

### Edits

The `edits` table represents films within a collection. The edit object is structured as follows:

- `edit_id` (string): PRIMARY Unique identifier, required, auto generates a random 8-char string if not provided.
- `title` (string): The title of the edit.
- `img` (string): The public URL for the cover image of the edit.
- `video` (string): The public URL for the video file.

An example edit object:

```json
{
  "edit_id": "bai72h48",
  "title": "Highlight Film",
  "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
  "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
}
```

### Collections

The `collections` table represents groups of edits. Each collection has attributes which comprise the display of the final product for the client. The collection object is structured as follows:

- `collection_id` (string): PRIMARY This comprises the URL. Unique identifier, required, auto generates a random 8-char string if not provided.
- `title` (string): (required) The title of the collection, typically the couple's names.
- `img` (string): The public URL for the cover image of the collection.
- `primary_font` (string): The name of the primary font selected.
- `secondary_font` (string): The name of the secondary font selected.
- `primary_color` (string): The hex value of the primary color.
- `background_color` (string): The hex value of the card background color.
- `text_color` (string): The hex value of the card text color.

An example collection object:

```json
{
  "collection_id": "y3r6kv0b",
  "title": "Miranda + Jeremiah",
  "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v2.jpg",
  "primary_font": "Playfair Display",
  "secondary_font": "Montserrat",
  "primary_color": "A59072",
  "background_color": "54555D",
  "text_color": "F0EAE1"
}
```

### Collections-Edits

The `collections_edits` table is a join table that connects collections with edits. It represents which edits belong to which collection. It includes a key that represents whether or not the edit belongs to the collection. The collections_edits object is structured as follows:

- `collection_id`: (Foreign Key) A reference ID to a particular collection.
- `edit_id`: (Foreign Key) A reference ID to a particular edit.
- `belongs`: (Boolean) A representation of whether or not the edit belongs to the referenced collection.

An example record:

```json
{
  "collection_id": "y3r6kv0b",
  "edit_id": "bai72h48",
  "belongs": true
}
```

## Routes

### Edits

The /edits route allows list, create, read, update, and delete functionality.

#### GET /edits

List all edits. Response:

```json
{
  "data": [
    {
      "edit_id": "bai72h48",
      "title": "Highlight Film",
      "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
      "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
    },
    // ...
  ]
}
```

#### POST /edits

Create a new edit. Response:

```json
{
  "data": {
    "edit_id": "bai72h48",
    "title": "Highlight Film",
    "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
    "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
  }
}
```

#### GET /edits/:edit_id

Reads a single edit. If the ID is incorrect, a `404` will be returned. Response:

```json
{
  "data": {
    "edit_id": "bai72h48",
    "title": "Highlight Film",
    "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
    "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
  }
}
```

#### PUT /edits/:edit_id

Partially or fully updates a single edit. If the ID is incorrect, a `404` will be returned. Response:

```json
{
  "data": {
    "edit_id": "bai72h48",
    "title": "Highlight Film",
    "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v3.jpg",
    "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit-v2.mp4"
  }
}
```

#### DELETE /edits/:edit_id

Deletes an edit by ID. Responds with `204 No Content`. If the ID is incorrect, a `404` will be returned.

### Collections

The /collections route allows list, create, read, update, and delete functionality.

#### GET /collections

List all collections and, the edits assigned to it. Response:

```json
{
  "data": [
    {
      "collection_id": "y3r6kv0b",
      "title": "Miranda + Jeremiah",
      "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v2.jpg",
      "primary_font": "Playfair Display",
      "secondary_font": "Montserrat",
      "primary_color": "A59072",
      "background_color": "54555D",
      "text_color": "F0EAE1",
      "edits": [
        {
          "edit_id": "bai72h48",
          "title": "Highlight Film",
          "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
          "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
        },
        {
          "edit_id": "4a5e83ah",
          "title": "Ceremony",
          "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-Ceremony.jpg",
          "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-Ceremony.mp4"
        },
        {
          "edit_id": "bg09vsl5",
          "title": "Toasts",
          "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-Toasts.jpg",
          "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-Toasts.mp4"
        }
      ]
    },
    // ...
  ]
}
```

#### POST /collections

Create a new collection. A body such as the following shall be passed along with the request:

```json
{
  "title": "Elena + Josh"
}
```

The response should fill in default values:

```json
{
  "collection_id": "7rk2jw89",
  "title": "Elena + Josh",
  "img": "",
  "primary_font": "Playfair Display",
  "secondary_font": "Montserrat",
  "primary_color": "A59072",
  "background_color": "54555D",
  "text_color": "F0EAE1"
}
```

#### GET /collections/:collection_id

List a single collection by ID and, all edits associated with it. Response:

```json
{
  "data": {
    "collection_id": "y3r6kv0b",
    "title": "Miranda + Jeremiah",
    "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v2.jpg",
    "primary_font": "Playfair Display",
    "secondary_font": "Montserrat",
    "primary_color": "A59072",
    "background_color": "54555D",
    "text_color": "F0EAE1",
    "edits": [
      {
        "edit_id": "bai72h48",
        "title": "Highlight Film",
        "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
        "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
      },
      {
        "edit_id": "4a5e83ah",
        "title": "Ceremony",
        "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-Ceremony.jpg",
        "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-Ceremony.mp4"
      },
      {
        "edit_id": "bg09vsl5",
        "title": "Toasts",
        "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-Toasts.jpg",
        "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-Toasts.mp4"
      }
    ]
  }
}
```

#### PUT /collections/:collection_id

Partially or fully updates a single collection. If the ID is incorrect, a `404` will be returned. Response:

```json
{
  "data": {
    "collection_id": "y3r6kv0b",
    "title": "Miranda + Jeremiah",
    "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v2.jpg",
    "primary_font": "Courier",
    "secondary_font": "Didot",
    "primary_color": "A59072",
    "background_color": "54555D",
    "text_color": "F0EAE1",
    "edits": [
      {
        "edit_id": "bai72h48",
        "title": "Highlight Film",
        "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-HighlightEdit-v1.jpg",
        "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-HighlightEdit.mp4"
      },
      {
        "edit_id": "4a5e83ah",
        "title": "Ceremony",
        "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-Ceremony.jpg",
        "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-Ceremony.mp4"
      },
      {
        "edit_id": "bg09vsl5",
        "title": "Toasts",
        "img": "https://wolfdew.s3.us-west-2.amazonaws.com/img/mirandaJeremiah-Toasts.jpg",
        "video": "https://wolfdew.s3.us-west-2.amazonaws.com/video/mirandaJeremiah-Toasts.mp4"
      }
    ]
  }
}
```

#### DELETE /collections/:collection_id

Deletes a collection by ID. Responds with `204 No Content`. If the ID is incorrect, a `404` will be returned.