export default {
  ERROR: 'ERROR',
  LOADING: 'LOADING',

  UPLOAD_IMAGE: 'UPLOAD_IMAGE',
  CLEAR_IMAGE: 'CLEAR_IMAGE',
  UPLOAD_SOUND: 'UPLOAD_SOUND',

  GET_BAND: 'GET_BAND', // Return band object
  SEARCH_BAND: 'SEARCH_BAND', // Return array of matched bands
  SHOW_DISC: 'SHOW_DISC', // Return number of disc you click
  SHOW_PHOTO: 'SHOW_PHOTO',
  FOLLOW_BAND: 'FOLLOW_BAND', // Return number of user follow a band
  NEW_BAND: 'NEW_BAND', // Create standard band document
  BAND_EDIT: 'BAND_EDIT',
  SEND_BAND_EDIT_INFO: 'SEND_BAND_EDIT_INFO', // Return user with info updated

  CREATE_DISC: 'CREATE_DISC',
  DELETE_DISC: 'DELETE_DISC',
  CREATE_CONCERT: 'CREATE_CONCERT',
  DELETE_CONCERT: 'DELETE_CONCERT',
  CREATE_PHOTO: 'CREATE_PHOTO',
  DELETE_PHOTO: 'DELETE_PHOTO',

  GET_USER: 'GET_USER', // Return user object
  SAVE_USER: 'SAVE_USER', // Return userIdentifier
  REMOVE_USER: 'REMOVE_USER', // Remove userIdentifier
  ADD_FOLLOW: 'ADD_FOLLOW', // Add follow to user document
  REMOVE_FOLLOW: 'REMOVE_FOLLOW', // Remove follow to user document
  USER_EDIT_NAME: 'USER_EDIT_NAME', // Return edited name by user
  USER_EDIT_BIO: 'USER_EDIT_BIO', // Return edited bio by user
  SEND_USER_EDIT_INFO: 'SEND_USER_EDIT_INFO', // Return user with info updated
  USER_EDIT: 'USER_EDIT'
};
