document.addEventListener("DOMContentLoaded", () => {
    // Container references
    const arrayContainer = document.getElementById('array-container');
    const singlyLinkedListContainer = document.getElementById('singly-linked-list-container');
    const doublyLinkedListContainer = document.getElementById('doubly-linked-list-container');
    const circularLinkedListContainer = document.getElementById('circular-linked-list-container');
    const stackContainer = document.getElementById('stack-container');
    const queueContainer = document.getElementById('queue-container');
    const dequeContainer = document.getElementById('deque-container');
    const priorityQueueContainer = document.getElementById('priority-queue-container');
    const minHeapContainer = document.getElementById('min-heap-container');
    const maxHeapContainer = document.getElementById('max-heap-container');

    // Visualization for array
    const arrayVisualization = () => {
        arrayContainer.innerHTML = '<h2>Array</h2>';
        const array = [1, 2, 3, 4, 5];
        array.forEach(item => {
            const element = document.createElement('div');
            element.className = 'array-element';
            element.textContent = item;
            arrayContainer.appendChild(element);
        });
    };

    // Visualization for singly linked list
    const singlyLinkedListVisualization = () => {
        singlyLinkedListContainer.innerHTML = '<h2>Singly Linked List</h2>';
        const linkedList = [
            { value: 1, next: 1 },
            { value: 2, next: 2 },
            { value: 3, next: 3 },
            { value: 4, next: 4 },
            { value: 5, next: null }
        ];

        linkedList.forEach((node, index) => {
            const element = document.createElement('div');
            element.className = 'linked-list-node';
            element.innerHTML = `
                <div>${node.value}</div>
                ${node.next !== null ? '<div class="linked-list-pointer-horizontal"></div>' : ''}
            `;
            singlyLinkedListContainer.appendChild(element);
        });
    };

    // Visualization for doubly linked list
    const doublyLinkedListVisualization = () => {
        doublyLinkedListContainer.innerHTML = '<h2>Doubly Linked List</h2>';
        const linkedList = [
            { value: 1, next: 1, prev: null },
            { value: 2, next: 2, prev: 0 },
            { value: 3, next: 3, prev: 1 },
            { value: 4, next: 4, prev: 2 },
            { value: 5, next: null, prev: 3 }
        ];

        linkedList.forEach((node, index) => {
            const element = document.createElement('div');
            element.className = 'linked-list-node-doubly';
            element.innerHTML = `
                ${node.prev !== null ? '<div class="linked-list-pointer-doubly linked-list-pointer-doubly-reverse"></div>' : ''}
                <div>${node.value}</div>
                ${node.next !== null ? '<div class="linked-list-pointer-doubly"></div>' : ''}
            `;
            doublyLinkedListContainer.appendChild(element);
        });
    };

    // Visualization for circular linked list
    const circularLinkedListVisualization = () => {
        circularLinkedListContainer.innerHTML = '<h2>Circular Linked List</h2>';
        const linkedList = [
            { value: 1, next: 1 },
            { value: 2, next: 2 },
            { value: 3, next: 3 },
            { value: 4, next: 4 },
            { value: 5, next: 0 }
        ];

        linkedList.forEach((node, index) => {
            const element = document.createElement('div');
            element.className = 'linked-list-node';
            element.innerHTML = `
                <div>${node.value}</div>
                ${node.next !== null ? '<div class="linked-list-pointer-horizontal"></div>' : ''}
            `;
            circularLinkedListContainer.appendChild(element);
        });

        // Adding a pointer back to the head for circular linked list
        const firstNode = circularLinkedListContainer.querySelector('.linked-list-node');
        if (firstNode) {
            const backPointer = document.createElement('div');
            backPointer.className = 'linked-list-pointer-horizontal';
            backPointer.style.position = 'absolute';
            backPointer.style.left = '-20px';
            firstNode.appendChild(backPointer);
        }
    };

    // Visualization for stack
    const stackVisualization = () => {
        stackContainer.innerHTML = '<h2>Stack</h2>';
        const stackContainerInner = document.createElement('div');
        stackContainerInner.className = 'stack-container';
        const stack = [1, 2, 3, 4, 5];
        stack.reverse().forEach(item => {
            const element = document.createElement('div');
            element.className = 'stack-element';
            element.textContent = item;
            stackContainerInner.appendChild(element);
        });
        stackContainer.appendChild(stackContainerInner);
    };

    // Visualization for queue
    const queueVisualization = () => {
        queueContainer.innerHTML = '<h2>Queue</h2>';
        const queue = [1, 2, 3, 4, 5];
        queue.forEach(item => {
            const element = document.createElement('div');
            element.className = 'queue-element';
            element.textContent = item;
            queueContainer.appendChild(element);
        });
    };

    // Visualization for deque
    const dequeVisualization = () => {
        dequeContainer.innerHTML = '<h2>Deque</h2>';
        const deque = [1, 2, 3, 4, 5];
        deque.forEach(item => {
            const element = document.createElement('div');
            element.className = 'deque-element';
            element.textContent = item;
            dequeContainer.appendChild(element);
        });
    };

    // Visualization for priority queue
    const priorityQueueVisualization = () => {
        priorityQueueContainer.innerHTML = '<h2>Priority Queue</h2>';
        const priorityQueue = [
            { value: 1, priority: 2 },
            { value: 2, priority: 1 },
            { value: 3, priority: 5 },
            { value: 4, priority: 4 },
            { value: 5, priority: 3 }
        ];
        priorityQueue
            .sort((a, b) => a.priority - b.priority)
            .forEach(item => {
                const element = document.createElement('div');
                element.className = 'priority-queue-element';
                element.textContent = `${item.value} (${item.priority})`;
                priorityQueueContainer.appendChild(element);
            });
    };

    // Call the functions to visualize the data structures
    arrayVisualization();
    singlyLinkedListVisualization();
    doublyLinkedListVisualization();
    circularLinkedListVisualization();
    stackVisualization();
    queueVisualization();
    dequeVisualization();
    priorityQueueVisualization();
});



