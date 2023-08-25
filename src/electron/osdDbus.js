import dbus from 'dbus-next';
import { ipcMain } from 'electron';

export async function createDbus(window) {
  const bus = dbus.sessionBus();
  const Variant = dbus.Variant;

  const osdService = await bus.getProxyObject(
    'org.osdlyrics.Daemon',
    '/org/osdlyrics/Lyrics'
  );

  const osdInterface = osdService.getInterface('org.osdlyrics.Lyrics');

  ipcMain.on('sendLyrics', async (e, { track, lyrics }) => {
    const metadata = {
      title: new Variant('s', track.name),
      artist: new Variant('s', track.ar.map(ar => ar.name).join(', ')),
    };

    await osdInterface.SetLyricContent(metadata, Buffer.from(lyrics));

    window.webContents.send('saveLyricFinished');
  });
}
