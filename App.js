// // ------------SECTION 1--------------
// // import React from "react";
// // import { FlatList, StyleSheet, Text, View } from "react-native";

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         paddingTop: 22,
// //     },
// //     item: {
// //         padding: 10,
// //         fontSize: 18,
// //         height: 44,
// //     },
// // });

// // const SectionListBasics = () => {
// //     return (
// //         <View style={styles.container}>
// //             <FlatList
// //                 data={[{ key: "Bukit Jalil" }, { key: "Sri Petaling" }, { key: "Puchong" }, { key: "Kajang" }]}
// //                 renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
// //             />
// //         </View>
// //     );
// // };

// // export default SectionListBasics;

// // ------------SECTION 2--------------
// // import React from "react";
// // import { SectionList, StyleSheet, Text, View } from "react-native";

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         paddingTop: 22,
// //     },
// //     sectionHeader: {
// //         paddingTop: 2,
// //         paddingLeft: 10,
// //         paddingRight: 10,
// //         paddingBottom: 2,
// //         fontSize: 14,
// //         fontWeight: "bold",
// //         backgroundColor: "rgba(247,247,247,1.0)",
// //     },
// //     item: {
// //         padding: 10,
// //         fontSize: 18,
// //         height: 44,
// //     },
// // });

// // const SectionListBasics = () => {
// //     return (
// //         <View style={styles.container}>
// //             <SectionList
// //                 sections={[
// //                     { title: "Fruit", data: ["Apple", "Banana", "Coconut", "Durian"] },
// //                     { title: "Place", data: ["Bukit Jalil", "Sri Petaling", "Puchong", "Kajang"] },
// //                 ]}
// //                 renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
// //                 renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
// //                 keyExtractor={(item, index) => index}
// //             />
// //         </View>
// //     );
// // };
// //
// // export default SectionListBasics;

// // ------------SECTION 3--------------
// import React, { Component } from "react";
// import { StyleSheet, Text, View, Image, FlatList, SectionList } from "react-native";
// import Bookitem from "./BookItem";
// // const BooksSample = [
// //     {
// //         rank: 1,
// //         title: "GATHERING PREY",
// //         author: "John Sandford",
// //         book_image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg",
// //     },
// //     {
// //         rank: 2,
// //         title: "MEMORY MAN",
// //         author: "David Baldacci",
// //         book_image: "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg",
// //     },
// // ];

// const BooksSample = [
//     {
//         section: "Horror",
//         books: [
//             {
//                 rank: 1,
//                 title: "GATHERING PREY",
//                 author: "John Sandford",
//                 book_image:
//                     "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg",
//             },
//             {
//                 rank: 2,
//                 title: "MEMORY MAN",
//                 author: "David Baldacci",
//                 book_image: "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg",
//             },
//         ],
//         section: "Thriller",
//         books: [
//             {
//                 rank: 1,
//                 title: "GATHERING PREY",
//                 author: "John Sandford",
//                 book_image:
//                     "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg",
//             },
//             {
//                 rank: 2,
//                 title: "MEMORY MAN",
//                 author: "David Baldacci",
//                 book_image: "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg",
//             },
//         ],
//     },
// ];

// class BookList extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = { data: this._addKeysToBooks(BooksSample) };
//     // }
//     // _renderItem = ({ item }) => {
//     //     return <Bookitem coverURL={item.book_image} title={item.key} author={item.author} />;
//     // };
//     // _addKeysToBooks = (books) => {
//     //     return books.map((book) => {
//     //         return Object.assign(book, { key: book.title });
//     //     });
//     // };
//     // render() {
//     //     return <FlatList data={this.state.data} renderItem={this._renderItem} />;
//     // }
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: this._transformBooksData(BooksSample),
//         };
//     }

//     _renderItem = ({ item }) => {
//         return (
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Image source={{ uri: item.book_image }} style={{ width: 50, height: 70 }} />
//                 <View style={{ marginLeft: 10 }}>
//                     <Text>{item.title}</Text>
//                     <Text>{item.author}</Text>
//                 </View>
//             </View>
//         );
//     };

//     _renderSectionHeader = ({ section }) => {
//         return (
//             <View style={{ backgroundColor: "lightgray", padding: 10 }}>
//                 <Text style={{ fontWeight: "bold" }}>{section.section}</Text>
//             </View>
//         );
//     };

//     _transformBooksData = (books) => {
//         const transformedData = [];

//         books.forEach((section) => {
//             const transformedSection = {
//                 section: section.section,
//                 data: section.books,
//             };

//             transformedData.push(transformedSection);
//         });

//         return transformedData;
//     };

//     render() {
//         return (
//             <SectionList
//                 sections={this.state.data}
//                 renderSectionHeader={this._renderSectionHeader}
//                 renderItem={this._renderItem}
//                 keyExtractor={(item) => item.title}
//             />
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22,
//     },
//     sectionHeader: {
//         paddingTop: 2,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 2,
//         fontSize: 14,
//         fontWeight: "bold",
//         backgroundColor: "rgba(247,247,247,1.0)",
//     },
// });
// export default BookList;

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, SectionList } from "react-native";
import Bookitem from "./BookItem";

const BooksSample = [
    {
        category: "Horror",
        books: [
            {
                rank: 1,
                title: "GATHERING PREY",
                author: "John Sandford",
                book_image:
                    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg",
            },
            // Add more horror books here
        ],
    },
    {
        category: "Fiction",
        books: [
            {
                rank: 2,
                title: "MEMORY MAN",
                author: "David Baldacci",
                book_image: "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg",
            },
            // Add more fiction books here
        ],
    },
    {
        category: "Children",
        books: [
            {
                rank: 3,
                title: "CHILDREN BOOK",
                author: "Author Name",
                book_image:
                    "https://firebasestorage.googleapis.com/v0/b/cozykitchen-8cadb.appspot.com/o/uhd.jpg?alt=media&token=83835eab-0b01-4c43-af0d-82afe6495f1a",
            },
            // Add more children's books here
        ],
    },
];

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this._transformData(BooksSample) };
    }

    _renderItem = ({ item }) => {
        return <Bookitem coverURL={item.book_image} title={item.title} author={item.author} />;
    };

    _transformData = (booksData) => {
        return booksData.map((category) => ({
            title: category.category,
            data: category.books,
        }));
    };

    _renderSectionHeader = ({ section }) => {
        return <Text style={styles.sectionHeader}>{section.title}</Text>;
    };

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.data}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    keyExtractor={(item, index) => item.title + index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "lightgray",
        padding: 10,
    },
});

export default BookList;
