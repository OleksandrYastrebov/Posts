import { Notify } from 'quasar';

export function showSuccessMessage(text) {
  Notify.create({
    type: 'positive',
    message: text,
    position: 'top-right',
    timeout: '500',
  });
}
export function showDangerMessage(text) {
  Notify.create({
    type: 'negative',
    message: text,
    position: 'top-right',
    timeout: '500',
  });
}
