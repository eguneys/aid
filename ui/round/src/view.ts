import { h } from 'snabbdom';
import RoundCtrl from './ctrl';
import { bind } from './util';
import { RoundPlayer } from 'shared_options';

export function main(ctrl: RoundCtrl) {
  return h('main.round__app box box-pad', [
    team(ctrl, 'aTeam'),
    vsReady(ctrl),
    team(ctrl, 'bTeam')
  ]);
}

export function vsReady(ctrl: RoundCtrl) {
  return h('div.versus', [
    h('span', 'VS'),
    h('div.button.button_metal', {
      hook: bind('click', e => {
        ctrl.ready();
      }, ctrl.redraw)
    }, 'Hazirim')
  ]);
}

export function team(ctrl: RoundCtrl, teamName: 'aTeam' | 'bTeam') {
  let team = ctrl.data.game[teamName];
  return h('div.team', [
    h('h2.name', `${team.color.toUpperCase()} Takimi`),
    h('ul', team.players.map((_: any) => player(ctrl, _)))
  ]);
}

export function player(ctrl: RoundCtrl, player: RoundPlayer) {
  const connecting = !ctrl.onGame(player.name) && ctrl.firstSeconds;
  return h('div.user-link', {
    class: {
      online: ctrl.onGame(player.name)
    }
  },[h('i.line', {
    attrs: {
      title: connecting ? 'Baglaniyor' : ctrl.onGame(player.name) ? 'Katildi' : 'Ayrildi'
    }
  }),
    h('span.name', player.name)
  ]);
}
