import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SecondProjectAppComponent } from '../app/second-project.component';

beforeEachProviders(() => [SecondProjectAppComponent]);

describe('App: SecondProject', () => {
  it('should create the app',
      inject([SecondProjectAppComponent], (app: SecondProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'second-project works!\'',
      inject([SecondProjectAppComponent], (app: SecondProjectAppComponent) => {
    expect(app.title).toEqual('second-project works!');
  }));
});
