import mongoose from 'mongoose';

var urlEntrySchema = mongoose.Schema({
  original: String,
  shortCode: { type: Number, index: true }
});
urlEntrySchema.index({ shortCode: 1 });
urlEntrySchema.set('autoindex', false);

export var UrlEntry = mongoose.model('UrlEntry', urlEntrySchema);
