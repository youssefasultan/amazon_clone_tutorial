import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@immutable
@JsonSerializable()
class User {
  final String id;
  final String name;
  final String address;
  final String password;
  final String type;
  final String token;

  const User({
    required this.id,
    required this.name,
    required this.address,
    required this.password,
    required this.type,
    required this.token,
  });

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}
