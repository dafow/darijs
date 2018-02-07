# dari.js

## To non-darija speakers:
> Moroccan Arabic or Moroccan Darija (الدارجة, [ddæɾiʒæ] in Morocco) is a member of the Maghrebi Arabic language continuum spoken in Morocco. It is mutually intelligible to some extent with Algerian Arabic and to a lesser extent with Tunisian Arabic. It has been heavily influenced by Berber, Latin (African Romance), French, and Spanish.

This repository aims to help non-English speakers to have fun with programming by translating JavaScript keywords into an interpretable language clone. This is mainly done through [pegjs](https://github.com/pegjs/pegjs/) to generate a new grammar and parser for darijs (translating keywords into their darija equivalent: see table below for a list of keywords). This allows constructing an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) consumed by [escodegen](https://github.com/estools/escodegen) which generates good old regular ECMAScript.

You can find an example of a live interpreter hosted here http://172.104.11.22/darijs/ (hint: "terjem" means "translate" and "bdah" obviously means "start (the script)"

## hhhhhhhhhhhhhhhhhhhhhhhhhh

bghiti t3elem lprogramation bla ma t3elem langlai ? sara7a sir t9ra langlai
walakin bda bhada la jak sahel

## tarjama darijs -> js (JavaScript)

| js			| darijs		|
| --------------|:--------------|
| break			| w9ef			|
| case			| ilakan		|
| catch			| ched			|
| continue		| zid			|
| debugger		| 7ellel		|
| default		| difo			|
| delete		| m7i			|
| do			| dir			|
| else			| wla			|
| false			| ghalat		|
| finally		| akhiran		|
| for			| lkol			|
| function		| dalla			|
| get			| jib			|
| if			| ilakan		|
| instanceof	| jayamen		|
| in			| fi			|
| new			| sne3			|
| null			| walo			|
| return		| reje3			|
| set			| 9ad			|
| switch		| 3la7assab		|
| this			| had			|
| throw			| lo7			|
| true			| sa7i7			|
| try			| jereb			|
| typeof		| mennaw3		|
| var			| goul			|
| void			| faragh		|
| while			| bidman		|
| with			| m3a			|
| console.log	| kteb.message	|

## amtal
```javascript
goul aghrom = 1.5;
goul ch7albina = 6;
goul laddition = 0;
lkol (i = 0; i < ch7albina; i++) {
	laddition += aghrom;
}
kteb.message('khelssou ' + laddition + 'dh');
```

```javascript
goul f3emri = 21;
goul chri = dalla(manga) {
	3la7assab(manga) {
		ilakan 'onepiece':
			reje3 walo;
			w9ef;
		ilakan 'dead note':
			reje3 'fdisk dur dial anas';
			w9ef;
		ilakan 'berserk':
			reje3 'kayn streamin hd';
			w9ef;
		difo:
			reje3 'mskine';
	}
}
ila (f3emri < 5) { chri('onepiece'); }
wla ila (f3emri < 18) { chri('dead note'); }
wla ila (f3emri < 27) { chri('berserk'); }
wla { chri(walo); }
```

### chokran li

* [pegjs](https://github.com/pegjs/pegjs/)
* [escodegen](https://github.com/estools/escodegen)
* [codeflask](https://github.com/kazzkiq/CodeFlask.js)
* [prism](https://github.com/PrismJS/prism)
* [materialize](https://github.com/Dogfalo/materialize)

### btw
hadchi dertou ghir bede7k i 9der i kounou 7acharat (bugs hhh). la kanet chi 7aja khassra khelliw com ;)
