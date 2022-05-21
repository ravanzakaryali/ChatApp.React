import { library } from '@fortawesome/fontawesome-svg-core';
import {
    fas,
    faCommentDots,
    faUser,
    faUserGroup,
    faComments

} from '@fortawesome/free-solid-svg-icons';
import {
    far,
} from '@fortawesome/free-regular-svg-icons'
library.add(
    fas,
    far,
    faUserGroup,
    faCommentDots,
    faUser,
    faComments
);
export default function FontAwesome() { }
