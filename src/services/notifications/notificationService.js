// notificationService.js

// Array to store notifications
const notifications = [];

// Add a new notification
function addNotification(type, message) {
  notifications.push({ type, message });
}

// Remove a notification by index
function removeNotification(index) {
  if (index >= 0 && index < notifications.length) {
    notifications.splice(index, 1);
  }
}

// Get the list of notifications
function getNotifications() {
  return notifications;
}

// Clear all notifications
function clearNotifications() {
  notifications.length = 0;
}

export { addNotification, removeNotification, getNotifications, clearNotifications };
