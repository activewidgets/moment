/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import moment from 'moment';
import {format} from '@activewidgets/options';


export function dates(){
    return format(pattern => {

        if (typeof pattern != 'string' || /[#0]/.test(pattern)){
            return;
        }

        return function(value){
            try {
                return moment(value).format(pattern);
            } 
            catch(err){ 
                return value 
            }
        }
    });
}
