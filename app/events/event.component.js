"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_model_1 = require('./event.model');
var EventComponent = (function () {
    function EventComponent() {
        this.onCancel = new core_1.EventEmitter();
    }
    EventComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', event_model_1.Event)
    ], EventComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventComponent.prototype, "onCancel", void 0);
    EventComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'em-event',
            templateUrl: "event.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], EventComponent);
    return EventComponent;
}());
exports.EventComponent = EventComponent;
