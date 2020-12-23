import { async, TestBed } from '@angular/core/testing';
import { getCaretIndex } from './carret-utils';

describe('carretUtils', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({})
      .compileComponents();
  }));

  it('should find the position of the carret', () => {
    const text = document.createTextNode('abcdefghijklmnop');
    const range = new Range();
    range.setStart(text, 4);
    range.setEnd(text, 4);
    spyOn(window, 'getSelection').and.returnValue({
      getRangeAt: () => range,
      rangeCount: 4,
    } as any);

    const carretPosition = getCaretIndex(text);
    expect(carretPosition).toEqual(4);
  });
});