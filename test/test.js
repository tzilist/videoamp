import expect from 'expect';
import parser from './../client/injector/parserUtils.js';

describe('#Parser', () => {
  it('Should Exist', () => {
    expect(parser).toExist();
  });
  it('Should run through all filters and match them versus iframes and videos', () => {
    expect(parser(
      ['testvid', 'testiframe'],
      { vid: [], ifr: [] },
      [{ src: 'testvideo', width: '1px', height: '1px' }],
      [{ src: 'testiframes', width: '1px', height: '1px' }]
    ))
      .toEqual({ vid: [{ src: 'testvideo', width: '1px', height: '1px' }],
      ifr: [{ src: 'testiframes', width: '1px', height: '1px' }] });
  });
});
