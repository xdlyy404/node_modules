define(['./_getByteLength'], function (_getByteLength) {

  // Internal function to wrap or shallow-copy an ArrayBuffer,
  // typed array or DataView to a new view, reusing the buffer.
  function toBufferView(bufferSource) {
    return new Uint8Array(
      bufferSource.buffer || bufferSource,
      bufferSource.byteOffset || 0,
      _getByteLength(bufferSource)
    );
  }

  return toBufferView;

});
