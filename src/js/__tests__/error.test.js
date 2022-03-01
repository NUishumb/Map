import ErrorRepository from '../ErrorRepository';

test('should return Method Not Allowed', () => {
    const errRepo = new ErrorRepository();
    const error = errRepo.translate(405);
    expect(error).toBe('Method Not Allowed');
});

test('should return Unknown Error', () => {
    const errRepo = new ErrorRepository();
    const error = errRepo.translate(767);
    expect(error).toBe('Unknown Error');
});
