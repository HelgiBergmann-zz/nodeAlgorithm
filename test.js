const assert = require(`assert`);
const algorithm = require(`./index`);

describe('Algorithm', function() {
  describe('#attempt', function() {
    it('should return [360]', function() {
      assert.deepEqual(algorithm.attempt([240, 360], [360, 720], [1080]), [360]);
    });
  });
  describe('#attempt', function() {
    it('should return [720]', function() {
      assert.deepEqual(algorithm.attempt([240, 720], [360, 720], [1080]), [720]);
    });
  });
  describe('#attempt', function() {
    it('should return []', function() {
      assert.deepEqual(algorithm.attempt([240], [360, 720], [1080]), []);
    });
  });
  describe('#attempt', function() {
    it('should return [240, 360]', function() {
      assert.deepEqual(algorithm.attempt([240, 360, 720], [240, 360, 720, 1080], [240, 360]), [240, 360]);
    });
  });
  describe('#attempt', function() {
    it('should return [240, 720]', function() {
      assert.deepEqual(algorithm.attempt([240, 720], [240, 360, 720, 1080], [240, 360]), [240, 720]);
    });
  });
  describe('#attempt', function() {
    it('should return [240]', function() {
      assert.deepEqual(algorithm.attempt([240, 720], [240, 360, 1080], [240, 360]), [240]);
    });
  });
  describe('#attempt', function() {
    it('should return []', function() {
      assert.deepEqual(algorithm.attempt([720], [240, 360, 1080], [240, 360]), []);
    });
  });

  describe('#attempt', function() {
    it('should return [360]', function() {
      assert.deepEqual(algorithm.attempt([240, 360], [240, 360], [720, 1080]), [360]);
    });
  });


  describe('#attempt', function() {
    it('should return [360, 720]', function() {
      assert.deepEqual(algorithm.attempt([240, 360, 720], [360, `any`], [360, 720]), [360, 720]);
    });
  });



  describe('#attempt', function() {
    it('should return [240, 360, 720]', function() {
      assert.deepEqual(algorithm.attempt([240, 360, 720], [240, 360, 720], [`any`, 720]), [240, 360, 720]);
    });
  });

  describe('#attempt', function() {
    it('should return [360]', function() {
      assert.deepEqual(algorithm.attempt([240, 360, 720], [360, 1080], [`any`, 720]), [360]);
    });
  });

  describe('#attempt', function() {
    it('should return []', function() {
      assert.deepEqual(algorithm.attempt([240, 360, 720], [1080], [`any`, 720]), []);
    });
  });
  
});