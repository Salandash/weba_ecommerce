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
var item_service_1 = require('../../services/item.service');
var itemsComponent = (function () {
    function itemsComponent(itemservice) {
        var _this = this;
        this.itemservice = itemservice;
        this.itemservice.getitems()
            .subscribe(function (items) {
            _this.items = items;
        });
    }
    itemsComponent.prototype.additem = function (event) {
        var _this = this;
        event.preventDefault();
        var newitem = {
            title: this.title,
            isDone: false
        };
        this.itemservice.additem(newitem)
            .subscribe(function (item) {
            _this.items.push(item);
            _this.title = '';
        });
    };
    itemsComponent.prototype.deleteitem = function (id) {
        var items = this.items;
        this.itemservice.deleteitem(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i]._id == id) {
                        items.splice(i, 1);
                    }
                }
            }
        });
    };
    itemsComponent.prototype.updateStatus = function (item) {
        var _item = {
            _id: item._id,
            title: item.title,
            isDone: !item.isDone
        };
        this.itemservice.updateStatus(_item).subscribe(function (data) {
            item.isDone = !item.isDone;
        });
    };
    itemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'items',
            templateUrl: 'items.component.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.itemservice])
    ], itemsComponent);
    return itemsComponent;
}());
exports.itemsComponent = itemsComponent;
//# sourceMappingURL=items.component.js.map