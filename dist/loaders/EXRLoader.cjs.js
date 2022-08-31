"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),r=require("fflate");class n extends e.DataTextureLoader{constructor(r){super(r),this.type=e.HalfFloatType}parse(n){const t=65536,a=14,i=65537,o=16384,l=Math.pow(2.7182818,2.2);const s={l:0,c:0,lc:0};function u(e,r,n,t,a){for(;n<e;)r=r<<8|V(t,a),n+=8;n-=e,s.l=r>>n&(1<<e)-1,s.c=r,s.lc=n}const c=new Array(59);function f(e,r,n,t,a,o,l){for(var f=n,v=0,h=0;a<=o;a++){if(f.value-n.value>t)return!1;u(6,v,h,e,f);var p=s.l;if(v=s.c,h=s.lc,l[a]=p,63==p){if(f.value-n.value>t)throw"Something wrong with hufUnpackEncTable";u(8,v,h,e,f);var w=s.l+6;if(v=s.c,h=s.lc,a+w>o+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)l[a++]=0;a--}else if(p>=59){if(a+(w=p-59+2)>o+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)l[a++]=0;a--}}!function(e){for(var r=0;r<=58;++r)c[r]=0;for(r=0;r<i;++r)c[e[r]]+=1;var n=0;for(r=58;r>0;--r){var t=n+c[r]>>1;c[r]=n,n=t}for(r=0;r<i;++r){var a=e[r];a>0&&(e[r]=a|c[a]++<<6)}}(l)}function v(e){return 63&e}function h(e){return e>>6}const p={c:0,lc:0};function w(e,r,n,t){e=e<<8|V(n,t),r+=8,p.c=e,p.lc=r}const d={c:0,lc:0};function y(e,r,n,t,a,i,o,l,s,u){if(e==r){t<8&&(w(n,t,a,o),n=p.c,t=p.lc);var c=n>>(t-=8);c=new Uint8Array([c])[0];if(s.value+c>u)return!1;for(var f=l[s.value-1];c-- >0;)l[s.value++]=f}else{if(!(s.value<u))return!1;l[s.value++]=e}d.c=n,d.lc=t}function S(e){return 65535&e}function g(e){var r=S(e);return r>32767?r-65536:r}const b={a:0,b:0};function m(e,r){var n=g(e),t=g(r),a=n+(1&t)+(t>>1),i=a,o=a-t;b.a=i,b.b=o}function A(e,r){var n=S(e),t=S(r),a=n-(t>>1)&65535,i=t+a-32768&65535;b.a=i,b.b=a}function U(e,r,n,t,a,i,o){for(var l,s=o<16384,u=n>a?a:n,c=1;c<=u;)c<<=1;for(l=c>>=1,c>>=1;c>=1;){for(var f,v,h,p,w=0,d=w+i*(a-l),y=i*c,S=i*l,g=t*c,U=t*l;w<=d;w+=S){for(var M=w,z=w+t*(n-l);M<=z;M+=U){var C=M+g,E=(O=M+y)+g;s?(m(e[M+r],e[O+r]),f=b.a,h=b.b,m(e[C+r],e[E+r]),v=b.a,p=b.b,m(f,v),e[M+r]=b.a,e[C+r]=b.b,m(h,p),e[O+r]=b.a,e[E+r]=b.b):(A(e[M+r],e[O+r]),f=b.a,h=b.b,A(e[C+r],e[E+r]),v=b.a,p=b.b,A(f,v),e[M+r]=b.a,e[C+r]=b.b,A(h,p),e[O+r]=b.a,e[E+r]=b.b)}if(n&c){var O=M+y;s?m(e[M+r],e[O+r]):A(e[M+r],e[O+r]),f=b.a,e[O+r]=b.b,e[M+r]=f}}if(a&c)for(M=w,z=w+t*(n-l);M<=z;M+=U){C=M+g;s?m(e[M+r],e[C+r]):A(e[M+r],e[C+r]),f=b.a,e[C+r]=b.b,e[M+r]=f}l=c,c>>=1}return w}function M(e,r,n,t,l,s){var u=n.value,c=H(r,n),S=H(r,n);n.value+=4;var g=H(r,n);if(n.value+=4,c<0||c>=i||S<0||S>=i)throw"Something wrong with HUF_ENCSIZE";var b=new Array(i),m=new Array(o);if(function(e){for(var r=0;r<o;r++)e[r]={},e[r].len=0,e[r].lit=0,e[r].p=null}(m),f(e,0,n,t-(n.value-u),c,S,b),g>8*(t-(n.value-u)))throw"Something wrong with hufUncompress";!function(e,r,n,t){for(;r<=n;r++){var i=h(e[r]),o=v(e[r]);if(i>>o)throw"Invalid table entry";if(o>a){if((c=t[i>>o-a]).len)throw"Invalid table entry";if(c.lit++,c.p){var l=c.p;c.p=new Array(c.lit);for(var s=0;s<c.lit-1;++s)c.p[s]=l[s]}else c.p=new Array(1);c.p[c.lit-1]=r}else if(o){var u=0;for(s=1<<a-o;s>0;s--){var c;if((c=t[(i<<a-o)+u]).len||c.p)throw"Invalid table entry";c.len=o,c.lit=r,u++}}}}(b,c,S,m),function(e,r,n,t,i,o,l,s,u,c){for(var f=0,S=0,g=s,b=Math.trunc(i.value+(o+7)/8);i.value<b;)for(w(f,S,n,i),f=p.c,S=p.lc;S>=a;)if((M=r[f>>S-a&16383]).len)S-=M.len,y(M.lit,l,f,S,n,0,i,u,c,g),f=d.c,S=d.lc;else{if(!M.p)throw"hufDecode issues";var m;for(m=0;m<M.lit;m++){for(var A=v(e[M.p[m]]);S<A&&i.value<b;)w(f,S,n,i),f=p.c,S=p.lc;if(S>=A&&h(e[M.p[m]])==(f>>S-A&(1<<A)-1)){S-=A,y(M.p[m],l,f,S,n,0,i,u,c,g),f=d.c,S=d.lc;break}}if(m==M.lit)throw"hufDecode issues"}var U=8-o&7;for(f>>=U,S-=U;S>0;){var M;if(!(M=r[f<<a-S&16383]).len)throw"hufDecode issues";S-=M.len,y(M.lit,l,f,S,n,0,i,u,c,g),f=d.c,S=d.lc}}(b,m,e,0,n,g,S,s,l,{value:0})}function z(e){for(var r=1;r<e.length;r++){var n=e[r-1]+e[r]-128;e[r]=n}}function C(e,r){for(var n=0,t=Math.floor((e.length+1)/2),a=0,i=e.length-1;!(a>i||(r[a++]=e[n++],a>i));)r[a++]=e[t++]}function E(e){for(var r=e.byteLength,n=new Array,t=0,a=new DataView(e);r>0;){var i=a.getInt8(t++);if(i<0){r-=(l=-i)+1;for(var o=0;o<l;o++)n.push(a.getUint8(t++))}else{var l=i;r-=2;var s=a.getUint8(t++);for(o=0;o<l+1;o++)n.push(s)}}return n}function O(e,r,n){for(var t,a=1;a<64;)65280==(t=r[e.value])?a=64:t>>8==255?a+=255&t:(n[a]=t,a++),e.value++}function R(e,r){r[0]=q(e[0]),r[1]=q(e[1]),r[2]=q(e[5]),r[3]=q(e[6]),r[4]=q(e[14]),r[5]=q(e[15]),r[6]=q(e[27]),r[7]=q(e[28]),r[8]=q(e[2]),r[9]=q(e[4]),r[10]=q(e[7]),r[11]=q(e[13]),r[12]=q(e[16]),r[13]=q(e[26]),r[14]=q(e[29]),r[15]=q(e[42]),r[16]=q(e[3]),r[17]=q(e[8]),r[18]=q(e[12]),r[19]=q(e[17]),r[20]=q(e[25]),r[21]=q(e[30]),r[22]=q(e[41]),r[23]=q(e[43]),r[24]=q(e[9]),r[25]=q(e[11]),r[26]=q(e[18]),r[27]=q(e[24]),r[28]=q(e[31]),r[29]=q(e[40]),r[30]=q(e[44]),r[31]=q(e[53]),r[32]=q(e[10]),r[33]=q(e[19]),r[34]=q(e[23]),r[35]=q(e[32]),r[36]=q(e[39]),r[37]=q(e[45]),r[38]=q(e[52]),r[39]=q(e[54]),r[40]=q(e[20]),r[41]=q(e[22]),r[42]=q(e[33]),r[43]=q(e[38]),r[44]=q(e[46]),r[45]=q(e[51]),r[46]=q(e[55]),r[47]=q(e[60]),r[48]=q(e[21]),r[49]=q(e[34]),r[50]=q(e[37]),r[51]=q(e[47]),r[52]=q(e[50]),r[53]=q(e[56]),r[54]=q(e[59]),r[55]=q(e[61]),r[56]=q(e[35]),r[57]=q(e[36]),r[58]=q(e[48]),r[59]=q(e[49]),r[60]=q(e[57]),r[61]=q(e[58]),r[62]=q(e[62]),r[63]=q(e[63])}function I(e){const r=.5*Math.cos(.7853975),n=.5*Math.cos(3.14159/16),t=.5*Math.cos(3.14159/8),a=.5*Math.cos(3*3.14159/16),i=.5*Math.cos(.981746875),o=.5*Math.cos(3*3.14159/8),l=.5*Math.cos(1.374445625);for(var s=new Array(4),u=new Array(4),c=new Array(4),f=new Array(4),v=0;v<8;++v){var h=8*v;s[0]=t*e[h+2],s[1]=o*e[h+2],s[2]=t*e[h+6],s[3]=o*e[h+6],u[0]=n*e[h+1]+a*e[h+3]+i*e[h+5]+l*e[h+7],u[1]=a*e[h+1]-l*e[h+3]-n*e[h+5]-i*e[h+7],u[2]=i*e[h+1]-n*e[h+3]+l*e[h+5]+a*e[h+7],u[3]=l*e[h+1]-i*e[h+3]+a*e[h+5]-n*e[h+7],c[0]=r*(e[h+0]+e[h+4]),c[3]=r*(e[h+0]-e[h+4]),c[1]=s[0]+s[3],c[2]=s[1]-s[2],f[0]=c[0]+c[1],f[1]=c[3]+c[2],f[2]=c[3]-c[2],f[3]=c[0]-c[1],e[h+0]=f[0]+u[0],e[h+1]=f[1]+u[1],e[h+2]=f[2]+u[2],e[h+3]=f[3]+u[3],e[h+4]=f[3]-u[3],e[h+5]=f[2]-u[2],e[h+6]=f[1]-u[1],e[h+7]=f[0]-u[0]}for(var p=0;p<8;++p)s[0]=t*e[16+p],s[1]=o*e[16+p],s[2]=t*e[48+p],s[3]=o*e[48+p],u[0]=n*e[8+p]+a*e[24+p]+i*e[40+p]+l*e[56+p],u[1]=a*e[8+p]-l*e[24+p]-n*e[40+p]-i*e[56+p],u[2]=i*e[8+p]-n*e[24+p]+l*e[40+p]+a*e[56+p],u[3]=l*e[8+p]-i*e[24+p]+a*e[40+p]-n*e[56+p],c[0]=r*(e[p]+e[32+p]),c[3]=r*(e[p]-e[32+p]),c[1]=s[0]+s[3],c[2]=s[1]-s[2],f[0]=c[0]+c[1],f[1]=c[3]+c[2],f[2]=c[3]-c[2],f[3]=c[0]-c[1],e[0+p]=f[0]+u[0],e[8+p]=f[1]+u[1],e[16+p]=f[2]+u[2],e[24+p]=f[3]+u[3],e[32+p]=f[3]-u[3],e[40+p]=f[2]-u[2],e[48+p]=f[1]-u[1],e[56+p]=f[0]-u[0]}function x(e){for(var r=0;r<64;++r){var n=e[0][r],t=e[1][r],a=e[2][r];e[0][r]=n+1.5747*a,e[1][r]=n-.1873*t-.4682*a,e[2][r]=n+1.8556*t}}function k(r,n,t){for(var a=0;a<64;++a)n[t+a]=e.DataUtils.toHalfFloat(P(r[a]))}function P(e){return e<=1?Math.sign(e)*Math.pow(Math.abs(e),2.2):Math.sign(e)*Math.pow(l,Math.abs(e)-1)}function N(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function D(e){var r=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),n=new Uint8Array(E(r)),t=new Uint8Array(n.length);return z(n),C(n,t),new DataView(t.buffer)}function L(e){var n=e.array.slice(e.offset.value,e.offset.value+e.size),t=r.unzlibSync(n),a=new Uint8Array(t.length);return z(t),C(t,a),new DataView(a.buffer)}function _(e){for(var r=e.viewer,n={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),i=new Uint8Array(8192),o=0,l=new Array(e.channels),s=0;s<e.channels;s++)l[s]={},l[s].start=o,l[s].end=l[s].start,l[s].nx=e.width,l[s].ny=e.lines,l[s].size=e.type,o+=l[s].nx*l[s].ny*l[s].size;var u=j(r,n),c=j(r,n);if(c>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(u<=c)for(s=0;s<c-u+1;s++)i[s+u]=W(r,n);var f=new Uint16Array(t),v=function(e,r){for(var n=0,a=0;a<t;++a)(0==a||e[a>>3]&1<<(7&a))&&(r[n++]=a);for(var i=n-1;n<t;)r[n++]=0;return i}(i,f),h=H(r,n);M(e.array,r,n,h,a,o);for(s=0;s<e.channels;++s)for(var p=l[s],w=0;w<l[s].size;++w)U(a,p.start+w,p.nx,p.size,p.ny,p.nx*p.size,v);!function(e,r,n){for(var t=0;t<n;++t)r[t]=e[r[t]]}(f,a,o);for(var d=0,y=new Uint8Array(a.buffer.byteLength),S=0;S<e.lines;S++)for(var g=0;g<e.channels;g++){var b=(p=l[g]).nx*p.size,m=new Uint8Array(a.buffer,2*p.end,2*b);y.set(m,d),d+=2*b,p.end+=b}return new DataView(y.buffer)}function T(e){var n=e.array.slice(e.offset.value,e.offset.value+e.size),t=r.unzlibSync(n);const a=e.lines*e.channels*e.width,i=1==e.type?new Uint16Array(a):new Uint32Array(a);let o=0,l=0;const s=new Array(4);for(let r=0;r<e.lines;r++)for(let r=0;r<e.channels;r++){let r=0;switch(e.type){case 1:s[0]=o,s[1]=s[0]+e.width,o=s[1]+e.width;for(let n=0;n<e.width;++n){r+=t[s[0]++]<<8|t[s[1]++],i[l]=r,l++}break;case 2:s[0]=o,s[1]=s[0]+e.width,s[2]=s[1]+e.width,o=s[2]+e.width;for(let n=0;n<e.width;++n){r+=t[s[0]++]<<24|t[s[1]++]<<16|t[s[2]++]<<8,i[l]=r,l++}}}return new DataView(i.buffer)}function F(e){var n=e.viewer,t={value:e.offset.value},a=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:Z(n,t),unknownUncompressedSize:Z(n,t),unknownCompressedSize:Z(n,t),acCompressedSize:Z(n,t),dcCompressedSize:Z(n,t),rleCompressedSize:Z(n,t),rleUncompressedSize:Z(n,t),rleRawSize:Z(n,t),totalAcUncompressedCount:Z(n,t),totalDcUncompressedCount:Z(n,t),acCompression:Z(n,t)};if(i.version<2)throw"EXRLoader.parse: "+re.compression+" version "+i.version+" is unsupported";for(var o=new Array,l=j(n,t)-2;l>0;){var s=B(n.buffer,t),u=W(n,t),c=u>>2&3,f=new Int8Array([(u>>4)-1])[0],v=W(n,t);o.push({name:s,index:f,type:v,compression:c}),l-=s.length+3}for(var h=re.channels,p=new Array(e.channels),w=0;w<e.channels;++w){var d=p[w]={},y=h[w];d.name=y.name,d.compression=0,d.decoded=!1,d.type=y.pixelType,d.pLinear=y.pLinear,d.width=e.width,d.height=e.lines}for(var S={idx:new Array(3)},g=0;g<e.channels;++g)for(d=p[g],w=0;w<o.length;++w){var b=o[w];d.name==b.name&&(d.compression=b.compression,b.index>=0&&(S.idx[b.index]=g),d.offset=g)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var m=new Uint16Array(i.totalAcUncompressedCount);M(e.array,n,t,i.acCompressedSize,m,i.totalAcUncompressedCount);break;case 1:var A=e.array.slice(t.value,t.value+i.totalAcUncompressedCount),U=r.unzlibSync(A);m=new Uint16Array(U.buffer);t.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var z={array:e.array,offset:t,size:i.dcCompressedSize},C=new Uint16Array(L(z).buffer);t.value+=i.dcCompressedSize}if(i.rleRawSize>0){A=e.array.slice(t.value,t.value+i.rleCompressedSize);var P=E((U=r.unzlibSync(A)).buffer);t.value+=i.rleCompressedSize}var N=0,D=new Array(p.length);for(w=0;w<D.length;++w)D[w]=new Array;for(var _=0;_<e.lines;++_)for(var T=0;T<p.length;++T)D[T].push(N),N+=p[T].width*e.type*2;!function(e,r,n,t,a,i){var o=new DataView(i.buffer),l=n[e.idx[0]].width,s=n[e.idx[0]].height,u=Math.floor(l/8),c=Math.ceil(l/8),f=Math.ceil(s/8),v=l-8*(c-1),h=s-8*(f-1),p={value:0},w=new Array(3),d=new Array(3),y=new Array(3),S=new Array(3),g=new Array(3);for(let n=0;n<3;++n)g[n]=r[e.idx[n]],w[n]=n<1?0:w[n-1]+c*f,d[n]=new Float32Array(64),y[n]=new Uint16Array(64),S[n]=new Uint16Array(64*c);for(let r=0;r<f;++r){var b=8;r==f-1&&(b=h);var m=8;for(let e=0;e<c;++e){e==c-1&&(m=v);for(let e=0;e<3;++e)y[e].fill(0),y[e][0]=a[w[e]++],O(p,t,y[e]),R(y[e],d[e]),I(d[e]);x(d);for(let r=0;r<3;++r)k(d[r],S[r],64*e)}let i=0;for(let t=0;t<3;++t){const a=n[e.idx[t]].type;for(let e=8*r;e<8*r+b;++e){i=g[t][e];for(let r=0;r<u;++r){const n=64*r+8*(7&e);o.setUint16(i+0*a,S[t][n+0],!0),o.setUint16(i+2*a,S[t][n+1],!0),o.setUint16(i+4*a,S[t][n+2],!0),o.setUint16(i+6*a,S[t][n+3],!0),o.setUint16(i+8*a,S[t][n+4],!0),o.setUint16(i+10*a,S[t][n+5],!0),o.setUint16(i+12*a,S[t][n+6],!0),o.setUint16(i+14*a,S[t][n+7],!0),i+=16*a}}if(u!=c)for(let e=8*r;e<8*r+b;++e){const r=g[t][e]+8*u*2*a,n=64*u+8*(7&e);for(let e=0;e<m;++e)o.setUint16(r+2*e*a,S[t][n+e],!0)}}}for(var A=new Uint16Array(l),U=(o=new DataView(i.buffer),0);U<3;++U){n[e.idx[U]].decoded=!0;var M=n[e.idx[U]].type;if(2==n[U].type)for(var z=0;z<s;++z){const e=g[U][z];for(var C=0;C<l;++C)A[C]=o.getUint16(e+2*C*M,!0);for(C=0;C<l;++C)o.setFloat32(e+2*C*M,q(A[C]),!0)}}}(S,D,p,m,C,a);for(w=0;w<p.length;++w){if(!(d=p[w]).decoded)switch(d.compression){case 2:var F=0,X=0;for(_=0;_<e.lines;++_){for(var H=D[w][F],V=0;V<d.width;++V){for(var Y=0;Y<2*d.type;++Y)a[H++]=P[X+Y*d.width*d.height];X++}F++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(a.buffer)}function B(e,r){for(var n=new Uint8Array(e),t=0;0!=n[r.value+t];)t+=1;var a=(new TextDecoder).decode(n.slice(r.value,r.value+t));return r.value=r.value+t+1,a}function X(e,r){var n=e.getInt32(r.value,!0);return r.value=r.value+4,n}function H(e,r){var n=e.getUint32(r.value,!0);return r.value=r.value+4,n}function V(e,r){var n=e[r.value];return r.value=r.value+1,n}function W(e,r){var n=e.getUint8(r.value);return r.value=r.value+1,n}const Z=function(e,r){let n;return n="getBigInt64"in DataView.prototype?Number(e.getBigInt64(r.value,!0)):e.getUint32(r.value+4,!0)+Number(e.getUint32(r.value,!0)<<32),r.value+=8,n};function Y(e,r){var n=e.getFloat32(r.value,!0);return r.value+=4,n}function G(r,n){return e.DataUtils.toHalfFloat(Y(r,n))}function q(e){var r=(31744&e)>>10,n=1023&e;return(e>>15?-1:1)*(r?31===r?n?NaN:1/0:Math.pow(2,r-15)*(1+n/1024):n/1024*6103515625e-14)}function j(e,r){var n=e.getUint16(r.value,!0);return r.value+=2,n}function $(e,r){return q(j(e,r))}function J(e,r,n,t,a){return"string"===t||"stringvector"===t||"iccProfile"===t?function(e,r,n){var t=(new TextDecoder).decode(new Uint8Array(e).slice(r.value,r.value+n));return r.value=r.value+n,t}(r,n,a):"chlist"===t?function(e,r,n,t){for(var a=n.value,i=[];n.value<a+t-1;){var o=B(r,n),l=X(e,n),s=W(e,n);n.value+=3;var u=X(e,n),c=X(e,n);i.push({name:o,pixelType:l,pLinear:s,xSampling:u,ySampling:c})}return n.value+=1,i}(e,r,n,a):"chromaticities"===t?function(e,r){return{redX:Y(e,r),redY:Y(e,r),greenX:Y(e,r),greenY:Y(e,r),blueX:Y(e,r),blueY:Y(e,r),whiteX:Y(e,r),whiteY:Y(e,r)}}(e,n):"compression"===t?function(e,r){return["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"][W(e,r)]}(e,n):"box2i"===t?function(e,r){return{xMin:H(e,r),yMin:H(e,r),xMax:H(e,r),yMax:H(e,r)}}(e,n):"lineOrder"===t?function(e,r){return["INCREASING_Y"][W(e,r)]}(e,n):"float"===t?Y(e,n):"v2f"===t?function(e,r){return[Y(e,r),Y(e,r)]}(e,n):"v3f"===t?function(e,r){return[Y(e,r),Y(e,r),Y(e,r)]}(e,n):"int"===t?X(e,n):"rational"===t?function(e,r){return[X(e,r),H(e,r)]}(e,n):"timecode"===t?function(e,r){return[H(e,r),H(e,r)]}(e,n):"preview"===t?(n.value+=a,"skipped"):void(n.value+=a)}const K=new DataView(n),Q=new Uint8Array(n),ee={value:0},re=function(e,r,n){const t={};if(20000630!=e.getUint32(0,!0))throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";t.version=e.getUint8(4);const a=e.getUint8(5);t.spec={singleTile:!!(2&a),longName:!!(4&a),deepFormat:!!(8&a),multiPart:!!(16&a)},n.value=8;for(var i=!0;i;){var o=B(r,n);if(0==o)i=!1;else{var l=B(r,n),s=J(e,r,n,l,H(e,n));void 0===s?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${l}'.`):t[o]=s}}if(0!=a)throw console.error("EXRHeader:",t),"THREE.EXRLoader: provided file is currently unsupported.";return t}(K,n,ee),ne=function(r,n,t,a,i){const o={size:0,viewer:n,array:t,offset:a,width:r.dataWindow.xMax-r.dataWindow.xMin+1,height:r.dataWindow.yMax-r.dataWindow.yMin+1,channels:r.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:r.channels[0].pixelType,uncompress:null,getter:null,format:null,encoding:null};switch(r.compression){case"NO_COMPRESSION":o.lines=1,o.uncompress=N;break;case"RLE_COMPRESSION":o.lines=1,o.uncompress=D;break;case"ZIPS_COMPRESSION":o.lines=1,o.uncompress=L;break;case"ZIP_COMPRESSION":o.lines=16,o.uncompress=L;break;case"PIZ_COMPRESSION":o.lines=32,o.uncompress=_;break;case"PXR24_COMPRESSION":o.lines=16,o.uncompress=T;break;case"DWAA_COMPRESSION":o.lines=32,o.uncompress=F;break;case"DWAB_COMPRESSION":o.lines=256,o.uncompress=F;break;default:throw"EXRLoader.parse: "+r.compression+" is unsupported"}if(o.scanlineBlockSize=o.lines,1==o.type)switch(i){case e.FloatType:o.getter=$,o.inputSize=2;break;case e.HalfFloatType:o.getter=j,o.inputSize=2}else{if(2!=o.type)throw"EXRLoader.parse: unsupported pixelType "+o.type+" for "+r.compression+".";switch(i){case e.FloatType:o.getter=Y,o.inputSize=4;break;case e.HalfFloatType:o.getter=G,o.inputSize=4}}o.blockCount=(r.dataWindow.yMax+1)/o.scanlineBlockSize;for(var l=0;l<o.blockCount;l++)Z(n,a);o.outputChannels=3==o.channels?4:o.channels;const s=o.width*o.height*o.outputChannels;switch(i){case e.FloatType:o.byteArray=new Float32Array(s),o.channels<o.outputChannels&&o.byteArray.fill(1,0,s);break;case e.HalfFloatType:o.byteArray=new Uint16Array(s),o.channels<o.outputChannels&&o.byteArray.fill(15360,0,s);break;default:console.error("THREE.EXRLoader: unsupported type: ",i)}return o.bytesPerLine=o.width*o.inputSize*o.channels,4==o.outputChannels?(o.format=e.RGBAFormat,o.encoding=e.LinearEncoding):(o.format=e.RedFormat,o.encoding=e.LinearEncoding),o}(re,K,Q,ee,this.type),te={value:0},ae={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<ne.height/ne.scanlineBlockSize;e++){const r=H(K,ee);ne.size=H(K,ee),ne.lines=r+ne.scanlineBlockSize>ne.height?ne.height-r:ne.scanlineBlockSize;const n=ne.size<ne.lines*ne.bytesPerLine?ne.uncompress(ne):N(ne);ee.value+=ne.size;for(let r=0;r<ne.scanlineBlockSize;r++){const t=r+e*ne.scanlineBlockSize;if(t>=ne.height)break;for(let e=0;e<ne.channels;e++){const a=ae[re.channels[e].name];for(let i=0;i<ne.width;i++){te.value=(r*(ne.channels*ne.width)+e*ne.width+i)*ne.inputSize;const o=(ne.height-1-t)*(ne.width*ne.outputChannels)+i*ne.outputChannels+a;ne.byteArray[o]=ne.getter(n,te)}}}}return{header:re,width:ne.width,height:ne.height,data:ne.byteArray,format:ne.format,encoding:ne.encoding,type:this.type}}setDataType(e){return this.type=e,this}load(r,n,t,a){return super.load(r,(function(r,t){r.encoding=t.encoding,r.minFilter=e.LinearFilter,r.magFilter=e.LinearFilter,r.generateMipmaps=!1,r.flipY=!1,n&&n(r,t)}),t,a)}}exports.EXRLoader=n;
