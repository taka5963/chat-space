## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- belongs_to :group
- has_many :chats

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :chats

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text|null: false|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user