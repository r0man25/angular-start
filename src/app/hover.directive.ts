/**
 * Created by us10140 on 31.05.2018.
 */
import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive ({
    selector : '[appHover]'
})

export class HoverDirective {
    @HostBinding ('class.hovered') isHover = false;

    @HostListener ('mouseenter') onMouseEnter() {
        this.isHover = true
    }

    @HostListener ('mouseleave') onMouseLeave() {
        this.isHover = false
    }


}