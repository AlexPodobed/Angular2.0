import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
    let pipe = new DurationPipe();

    it('should transform 111 to "1 h 51 min"', () => {
        expect(pipe.transform(111)).toBe('1 h 51 min');
    });

    it('should transform 50 to "50 min"', () => {
        expect(pipe.transform(50)).toBe('50 min');
    });

    it('should return "0 min" if not a number was provided', () => {
        expect(pipe.transform('')).toBe('0 min');
    });
});
