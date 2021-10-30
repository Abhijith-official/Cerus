
var records = [
    { id: 1, username: 'administrator', password: 'pass_me_admin', displayName: 'Admin', prefs: [ { value: 'adminjack@example.com' } ], email: 'adminjack@example.com', role: 'Admin'  }
  , { id: 2, username: 'distributor', password: 'pass_me_always', displayName: 'Distributor', prefs: [ { value: 'marketjenny@example.com' } ], email: 'marketjenny@example.com', role: 'Distributor'  }
  , { id: 3, username: 'farmer', password: 'pass_me_always', displayName: 'Farmer', prefs: [ { value: 'farmerbrown@example.com' } ], email: 'farmerbrown@example.com', role: 'Farmer'  }
  , { id: 4, username: 'consumer', password: 'pass_me_always', displayName: 'Consumer', prefs: [ { value: 'consumerjill@example.com' } ], email: 'consumerjill@example.com', role: 'Consumer'  }
  , { id: 5, username: 'bcregulator', password: 'authenticate_me', displayName: 'REGULATOR', prefs: [ { value: 'superuserjulz@example.com' } ], email: 'superuserjulz@example.com', role: 'Superuser'  }
  , { id: 6, username: 'retailer', password: 'pass_me_always', displayName: 'Retailer', prefs: [ { value: 'retailer@example.com' } ], email: 'retailer_abhi@example.com', role: 'Retailer'  }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}