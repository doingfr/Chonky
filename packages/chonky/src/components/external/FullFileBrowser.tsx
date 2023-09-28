/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

import React from 'react';

import { FileBrowserHandle, FileBrowserProps } from '../../types/file-browser.types';
import { FileList } from '../file-list/FileList';
import { FileBrowser } from './FileBrowser';
import { FileContextMenu } from './FileContextMenu';
import { FileNavbar } from './FileNavbar';
import { FileToolbar, FileToolbarProps } from './FileToolbar';

export const FullFileBrowser = React.memo(
    React.forwardRef<FileBrowserHandle, FileBrowserProps & FileToolbarProps>((props, ref) => {
        const { onScroll, hideSearchBar } = props
        return (
            <FileBrowser ref={ref} {...props}>
                <FileNavbar />
                <FileToolbar hideSearchBar={hideSearchBar} />
                <FileList onScroll={onScroll}/>
                <FileContextMenu/>
            </FileBrowser>
        );
    })
);
FullFileBrowser.displayName = 'FullFileBrowser';
