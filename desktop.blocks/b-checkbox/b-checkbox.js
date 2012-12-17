BEM.DOM.decl('b-checkbox', {

    onSetMod : {

        js: function() {
            this.bindTo('change', this._onChange);
        },

        checked: {

            yes: function() {
                this.domElem.attr('checked', 'checked');
            },

            '': function() {
                this.domElem.removeAttr('checked');
            }

        },

        disabled: {

            yes: function() {
                this.domElem.attr('disabled', 'disabled');
            },

            '': function() {
                this.domElem.removeAttr('disabled');
            }

        }

    },

    _onChange : function(e) {

        e.preventDefault();

        e.target.checked
            ? this.setMod('checked', 'yes')
            : this.delMod('checked');

        this.trigger('change', this.getMod('checked'));

    }

});
