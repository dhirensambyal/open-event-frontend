import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupIntegrationTest } from 'open-event-frontend/tests/helpers/setup-integration-test';
import { render } from '@ember/test-helpers';

module('Integration | Component | ui table/cell/cell image', function(hooks) {
  setupIntegrationTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{ui-table/cell/cell-image}}`);
    assert.ok(this.element.innerHTML.trim().includes('Event logo'));
  });

  test('it renders', async function(assert) {
    const record = { logoUrl: 'logo-url' };
    this.set('record', record);
    await render(hbs`{{ui-table/cell/cell-image record=record}}`);
    assert.ok(this.element.innerHTML.trim().includes('logo-url'));
  });
});
