// Copyright (c) ppy Pty Ltd <contact@ppy.sh>. Licensed under the GNU Affero General Public License v3.0.
// See the LICENCE file in the repository root for full licence text.

import * as React from 'react';
import { classWithModifiers } from 'utils/css';
import { formatNumber } from 'utils/html';

interface Props {
  count: number;
  iconClassName: string;
  ready: boolean;
  type?: string;
}

export default function NotificationIcon(props: Props) {
  const modifiers = {
    glow: props.count > 0,
    mobile: props.type === 'mobile',
  };

  return (
    <span className={classWithModifiers('notification-icon', modifiers)}>
      <i className={props.iconClassName} />
      <span className='notification-icon__count'>
        {props.ready ? formatNumber(props.count) : '...'}
      </span>
    </span>
  );
}
