import test from 'ava';
import { initial } from 'chesst';
import { node, children } from './_util';
import { NodeRoot } from '../node';
import { nodeRootBsonHandler } from '../nodebson';

test('node', t => {

  let root = NodeRoot.fromFen(initial);

  root.children  = children(
    node(1, "e2e4", "e4",
         children(
           node(2,
                "d7d5",
                "d5",
                children(
                  node(3, "a2a3", "a3"),
                  node(3, "b2b3", "b3")
                )
               ),
           node(2,
                "g8f6",
                "Nf6",
                children(
                  node(3, "h2h4", "h4")
                )
               )
         )
        ),
    node(
      1,
      "g1f3",
      "Nf3",
      children(
        node(2, "a7a6", "a6"),
        node(
          2,
          "b7b6",
          "b6",
          children(
            node(3, "c2c4", "c4")
          )
        )
      )
    )
  );

  let rdoc = nodeRootBsonHandler.write(root);
  t.deepEqual(root, nodeRootBsonHandler.read(rdoc));
  
});
