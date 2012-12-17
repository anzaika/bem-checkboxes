BEM.DOM.decl('b-checkbox-grid', {

    onSetMod : {

        js: function() {

            BEM.blocks['b-checkbox']
               .on(this.domElem, 'change', this._onChange, this);

            this._onChange();

        },

        disabled: {

            yes: function() {
                this._checkedBox =
                    this._getCheckedBox().setMod('disabled', 'yes');
            },

            '': function() {
                this._checkedBox.delMod('disabled');
            }

        }

    },

    _getCheckedBox: function() {
        return this._getCheckedBoxes()[0];
    },

    _getCheckedBoxes: function() {

        return this.findBlocksInside({ block: 'b-checkbox',
                                       modName: 'checked',
                                       modVal: 'yes'});

    },

    _countBoxes: function() {
        return this._getCheckedBoxes().length;
    },

    _isOneCheckedBoxLeft: function() {
        return this._countBoxes() === 1;
    },

    _onChange: function(e) {
        this.setMod('disabled', this._isOneCheckedBoxLeft() ? 'yes' : '');
    }

});
