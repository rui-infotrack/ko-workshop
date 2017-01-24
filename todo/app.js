;(function(ns) {
  var Item = function(name) {
    this.name = ko.observable(name);
    this.isDone = ko.observable(false);
  };

  var List = function() {
    var self = this;
    this.items = ko.observableArray([new Item('buy milk'), new Item('buy fruit')]);
    this.pendingItem = ko.observable('');
    this.canAddItem = ko.pureComputed(function() {
      return self.pendingItem().trim().length > 0;
    });
    this.filter = ko.observable('all');

    this.visibleItems = ko.pureComputed(function() {
      return ko.utils.arrayFilter(self.items(), function(item) {
        var filter = self.filter();
        if (filter === 'all') {
          return true;
        } else if (filter === 'undone') {
          return !item.isDone();
        }
        return item.isDone();
      });
    });

    this.addItem = function() {
      if (!self.canAddItem()) {
        return;
      }
      var name = self.pendingItem();
      self.items.push(new Item(name));

      // clear textbox
      self.pendingItem('');
    };

    this.removeItem = function(item) {
      self.items.remove(item);
    };

    this.toggleItem = function(item) {
      item.isDone(!item.isDone());
    };

    this.totalCompleted = ko.pureComputed(function() {
      return ko.utils.arrayFilter(self.items(), function(item) {
        return item.isDone();
      }).length;
    });

    this.totalUndone = ko.pureComputed(function() {
      return self.items().length - self.totalCompleted();
    });
  };

  ns.mount = function(node) {
    ko.applyBindings(new List(), node);
  }
})(window.todo || (window.todo = {}));
